/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GenerateModuleCpp.js
 */

#include "RNBarsSpecJSI.h"

namespace facebook::react {

static jsi::Value __hostFunction_NativeRNBarsCxxSpecJSI_setStatusBarStyle(jsi::Runtime &rt, TurboModule &turboModule, const jsi::Value* args, size_t count) {
  static_cast<NativeRNBarsCxxSpecJSI *>(&turboModule)->setStatusBarStyle(
    rt,
    count <= 0 ? throw jsi::JSError(rt, "Expected argument in position 0 to be passed") : args[0].asString(rt)
  );
  return jsi::Value::undefined();
}
static jsi::Value __hostFunction_NativeRNBarsCxxSpecJSI_setNavigationBarStyle(jsi::Runtime &rt, TurboModule &turboModule, const jsi::Value* args, size_t count) {
  static_cast<NativeRNBarsCxxSpecJSI *>(&turboModule)->setNavigationBarStyle(
    rt,
    count <= 0 ? throw jsi::JSError(rt, "Expected argument in position 0 to be passed") : args[0].asString(rt)
  );
  return jsi::Value::undefined();
}

NativeRNBarsCxxSpecJSI::NativeRNBarsCxxSpecJSI(std::shared_ptr<CallInvoker> jsInvoker)
  : TurboModule("RNBars", jsInvoker) {
  methodMap_["setStatusBarStyle"] = MethodMetadata {1, __hostFunction_NativeRNBarsCxxSpecJSI_setStatusBarStyle};
  methodMap_["setNavigationBarStyle"] = MethodMetadata {1, __hostFunction_NativeRNBarsCxxSpecJSI_setNavigationBarStyle};
}


} // namespace facebook::react