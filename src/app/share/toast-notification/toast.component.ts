import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { AnimationEvent } from "@angular/animations";
import { ToastRef } from "./toast-ref";
import { toastAnimations, ToastAnimationState } from "./toast-animation";
import {
  ToastData,
  TOAST_CONFIG_TOKEN,
  ToastConfig,
  ToastType
} from "./toast-configs";

@Component({
  selector: "app-toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["toast.component.scss"],
  animations: [toastAnimations.fadeToast]
})
export class ToastComponent implements OnInit, OnDestroy {
  animationState: ToastAnimationState = "default";
  iconType: string;
  color = "#FF3D00";
  textColor = "#FFFFFF";
  private intervalId: number=0;

  constructor(
    readonly data: ToastData,
    readonly ref: ToastRef,
    @Inject(TOAST_CONFIG_TOKEN) public toastConfig: ToastConfig
  ) {
    this.iconType = "times-circle";
    // data.type === ToastType.success ? "done" : ToastType[data.type];
    if (data.type === ToastType.success) {
      if (!data.title) {
        data.title = "Success";
      }
      if (!data.text) {
        data.text = "Operation Successful";
      }
      this.color = "#51A351";
      this.iconType = "check-circle";
    } else if (data.type === ToastType.warning) {
      if (!data.title) {
        data.title = "Warning";
      }
      if (!data.text) {
        data.title = "Warning";
      }
      this.color = "#F0E68C";
      this.textColor = "black"
      this.iconType = "exclamation-circle";
    } else if (data.type === ToastType.info) {
      if (!data.title) {
        data.title = "Information";
      }
      this.color = "#209CEE";
      this.iconType = "info-circle";
    } else {
      if (!data.title) {
        data.title = "Error";
      }
      if (!data.text) {
        data.text = "Error";
      }
    }
  }
 yesClick(){
  this.close()
  if(this.data.yesClick){
    this.data.yesClick()
  }
 }
 noClick(){
  this.close()
  if(this.data?.noClick)
   this.data?.noClick()
 }
  ngOnInit() {
    this.intervalId = window.setTimeout(
      () => (this.animationState = "closing"),
      this.data.type == ToastType.warning?100000000:6000
    );
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

  close() {
    this.ref.close();
  }

  onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as ToastAnimationState) === "closing";
    const itFinished = this.animationState === "closing";

    if (isFadeOut && itFinished) {
      this.close();
    }
  }
}
