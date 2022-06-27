import {MobileAppInstallTimeSettings} from './mobileAppInstallTimeSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties used to determine when to offer an app to devices and when to install the app on devices. */
export class MobileAppInstallTimeSettingsImpl implements MobileAppInstallTimeSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The time at which the app should be installed. */
    public deadlineDateTime?: Date | undefined;
    /** The time at which the app should be available for installation. */
    public startDateTime?: Date | undefined;
    /** Whether the local device time or UTC time should be used when determining the available and deadline times. */
    public useLocalTime?: boolean | undefined;
    /**
     * Instantiates a new mobileAppInstallTimeSettings and sets the default values.
     * @param mobileAppInstallTimeSettingsParameterValue 
     */
    public constructor(mobileAppInstallTimeSettingsParameterValue?: MobileAppInstallTimeSettings | undefined) {
        this.additionalData = mobileAppInstallTimeSettingsParameterValue?.additionalData ? mobileAppInstallTimeSettingsParameterValue?.additionalData! : {};
        this.deadlineDateTime = mobileAppInstallTimeSettingsParameterValue?.deadlineDateTime;
        this.startDateTime = mobileAppInstallTimeSettingsParameterValue?.startDateTime;
        this.useLocalTime = mobileAppInstallTimeSettingsParameterValue?.useLocalTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deadlineDateTime": n => { this.deadlineDateTime = n.getDateValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "useLocalTime": n => { this.useLocalTime = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.deadlineDateTime){
            writer.writeDateValue("deadlineDateTime", this.deadlineDateTime);
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.useLocalTime){
            writer.writeBooleanValue("useLocalTime", this.useLocalTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
