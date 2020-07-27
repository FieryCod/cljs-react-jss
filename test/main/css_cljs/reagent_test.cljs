(ns css-cljs.reagent-test
  (:require
   [css-cljs.utils-test :as ut]
   [css-cljs.reagent :as css]
   [css-cljs.def :as df]
   [cljs.test :as t :include-macros true]))

(defn SimpleComponentClassesPrint!
  [classes]
  (print classes)
  [:div {:class (:wrapper classes)} "SimpleComponent"])

(def styles {:wrapper {:background-color "red"
                       :visibility "hidden"}})

(css/defstyled SimpleComponentStyled
  [(css/with-styles styles) SimpleComponentClassesPrint!])

(css/defstyled SimpleComponentPrint!Styled
  [(css/with-styles styles) SimpleComponentClassesPrint!])

(css/defstyled SimpleComponentPrint!StyledWrapStyles
  [styles SimpleComponentClassesPrint!])

(css/defstyled SimpleComponentPrint!StyledWithTheme
  [(css/with-styles (fn [theme] (merge styles theme)))
   SimpleComponentClassesPrint!])

(css/defstyled SimpleComponentPrint!StyledWrapStylesWithSlugCaseProperty
  [{:some-long-key {:color "red"}} SimpleComponentClassesPrint!])

(css/defstyled SimpleComponentAdditionalPrint!Styled
  [(css/with-styles {:additional {:color "red"}} {:merge-styles? true}) SimpleComponentPrint!Styled])

(t/deftest higher-order-function-api-test
  (t/testing "should have access to classes"
    (t/is (ut/contains-all? (ut/component->out [SimpleComponentPrint!Styled])
                            [:wrapper])))

  (t/testing "should allow additional class access"
    (t/is (ut/contains-all? (ut/component->out [SimpleComponentAdditionalPrint!Styled])
                            [:wrapper :additional])))

  (t/testing "should automatically wrap with `with-styles` when map is detected"
    (t/is (ut/contains-all? (ut/component->out [SimpleComponentAdditionalPrint!Styled])
                            [:wrapper])))

  (t/testing "should not transform properties from slug-case to camel-case"
    (t/is (ut/contains-all? (ut/component->out [SimpleComponentPrint!StyledWrapStylesWithSlugCaseProperty])
                            [:some-long-key])))

  (t/testing "should contain additional styles from ThemeProvider"
    (t/is (ut/contains-all? (ut/component->out [css/ThemeProvider {:theme {:theme-property {:color "red"}}}
                                                [SimpleComponentPrint!StyledWithTheme]])
                            [:wrapper :theme-property])))

  (t/testing "should minify all classes when `css-cljs.def/minify?` is set to true"
    (with-redefs [df/minify? true]
      (t/is (every? (fn [k] (= (count (str k)) 3))
                    (vals (ut/component->out [css/JssProviderWithMinification {} [SimpleComponentPrint!Styled]]))))))

  (t/testing "should minify all classes when `css-cljs.def/minify?`` is set to true (additional)"
    (with-redefs [df/minify? true]
      (t/is (every? (fn [k] (= (count (str k)) 3))
                    (vals (ut/component->out [css/JssProviderWithMinification {} [SimpleComponentAdditionalPrint!Styled]])))))))

(ut/cleanup-after-every!)
