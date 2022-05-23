import {ChangeTrackedEntity} from './changeTrackedEntity';
import {WorkforceIntegrationEncryption} from './workforceIntegrationEncryption';
import {WorkforceIntegrationSupportedEntities} from './workforceIntegrationSupportedEntities';

export interface WorkforceIntegration extends ChangeTrackedEntity{
    /** API version for the call back URL. Start with 1. */
    apiVersion?:number | undefined;
    /** Name of the workforce integration. */
    displayName?:string | undefined;
    /** The workforce integration encryption resource. */
    encryption?:WorkforceIntegrationEncryption | undefined;
    /** Indicates whether this workforce integration is currently active and available. */
    isActive?:boolean | undefined;
    /** This property has replaced supports in v1.0. We recommend that you use this property instead of supports. The supports property is still supported in beta for the time being. The possible values are: none, shift, swapRequest, openshift, openShiftRequest, userShiftPreferences, offerShiftRequest, unknownFutureValue, timeCard, timeOffReason, timeOff, timeOffRequest. Note that you must use the Prefer: include-unknown-enum-members request header to get the following values in this evolvable enum: timeCard, timeOffReason, timeOff, timeOffRequest. If selecting more than one value, all values must start with the first letter in uppercase. */
    supportedEntities?:WorkforceIntegrationSupportedEntities | undefined;
    /** Workforce Integration URL for callbacks from the Shifts service. */
    url?:string | undefined;
}
