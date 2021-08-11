import { InjectionToken, TemplateRef } from "@angular/core";

export class ToastData {
  type: ToastType=ToastType.info;
  text?: string;
  title?: string;
  template?: TemplateRef<any>;
  templateContext?: {};
  yesClick?:()=>void;
  noClick?:()=>void;
}

export enum ToastType {
  warning ='warning' ,
  info='info',
  success='success',
  error='error'
}

export interface ToastConfig {
  position?: {
    top: number;
    right: number;
  };
  animation?: {
    fadeOut: number;
    fadeIn: number;
  };
}

export const defaultToastConfig: ToastConfig = {
  position: {
    top: 10,
    right: 10
  },
  animation: {
    fadeOut: 2500,
    fadeIn: 300
  }
};

export const TOAST_CONFIG_TOKEN = new InjectionToken("toast-config");
