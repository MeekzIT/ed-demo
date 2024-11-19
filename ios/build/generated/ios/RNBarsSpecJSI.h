/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GenerateModuleH.js
 */

#pragma once

#include <ReactCommon/TurboModule.h>
#include <react/bridging/Bridging.h>

namespace facebook::react {


  class JSI_EXPORT NativeRNBarsCxxSpecJSI : public TurboModule {
protected:
  NativeRNBarsCxxSpecJSI(std::shared_ptr<CallInvoker> jsInvoker);

public:
  virtual void setStatusBarStyle(jsi::Runtime &rt, jsi::String style) = 0;
  virtual void setNavigationBarStyle(jsi::Runtime &rt, jsi::String style) = 0;

};

template <typename T>
class JSI_EXPORT NativeRNBarsCxxSpec : public TurboModule {
public:
  jsi::Value get(jsi::Runtime &rt, const jsi::PropNameID &propName) override {
    return delegate_.get(rt, propName);
  }

  static constexpr std::string_view kModuleName = "RNBars";

protected:
  NativeRNBarsCxxSpec(std::shared_ptr<CallInvoker> jsInvoker)
    : TurboModule(std::string{NativeRNBarsCxxSpec::kModuleName}, jsInvoker),
      delegate_(reinterpret_cast<T*>(this), jsInvoker) {}


private:
  class Delegate : public NativeRNBarsCxxSpecJSI {
  public:
    Delegate(T *instance, std::shared_ptr<CallInvoker> jsInvoker) :
      NativeRNBarsCxxSpecJSI(std::move(jsInvoker)), instance_(instance) {

    }

    void setStatusBarStyle(jsi::Runtime &rt, jsi::String style) override {
      static_assert(
          bridging::getParameterCount(&T::setStatusBarStyle) == 2,
          "Expected setStatusBarStyle(...) to have 2 parameters");

      return bridging::callFromJs<void>(
          rt, &T::setStatusBarStyle, jsInvoker_, instance_, std::move(style));
    }
    void setNavigationBarStyle(jsi::Runtime &rt, jsi::String style) override {
      static_assert(
          bridging::getParameterCount(&T::setNavigationBarStyle) == 2,
          "Expected setNavigationBarStyle(...) to have 2 parameters");

      return bridging::callFromJs<void>(
          rt, &T::setNavigationBarStyle, jsInvoker_, instance_, std::move(style));
    }

  private:
    friend class NativeRNBarsCxxSpec;
    T *instance_;
  };

  Delegate delegate_;
};

} // namespace facebook::react
