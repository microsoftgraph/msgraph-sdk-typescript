import {createWindowsDeviceAccountFromDiscriminatorValue} from './createWindowsDeviceAccountFromDiscriminatorValue';
import {WindowsDeviceAccountImpl} from './index';
import {UpdateWindowsDeviceAccountActionParameter} from './updateWindowsDeviceAccountActionParameter';
import {WindowsDeviceAccount} from './windowsDeviceAccount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UpdateWindowsDeviceAccountActionParameterImpl implements AdditionalDataHolder, Parsable, UpdateWindowsDeviceAccountActionParameter {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Not yet documented */
    public calendarSyncEnabled?: boolean | undefined;
    /** Not yet documented */
    public deviceAccount?: WindowsDeviceAccount | undefined;
    /** Not yet documented */
    public deviceAccountEmail?: string | undefined;
    /** Not yet documented */
    public exchangeServer?: string | undefined;
    /** Not yet documented */
    public passwordRotationEnabled?: boolean | undefined;
    /** Not yet documented */
    public sessionInitiationProtocalAddress?: string | undefined;
    /**
     * Instantiates a new updateWindowsDeviceAccountActionParameter and sets the default values.
     * @param updateWindowsDeviceAccountActionParameterParameterValue 
     */
    public constructor(updateWindowsDeviceAccountActionParameterParameterValue?: UpdateWindowsDeviceAccountActionParameter | undefined) {
        this.additionalData = updateWindowsDeviceAccountActionParameterParameterValue?.additionalData ? updateWindowsDeviceAccountActionParameterParameterValue?.additionalData! : {}
        this.calendarSyncEnabled = updateWindowsDeviceAccountActionParameterParameterValue?.calendarSyncEnabled ;
        this.deviceAccount = updateWindowsDeviceAccountActionParameterParameterValue?.deviceAccount ;
        this.deviceAccountEmail = updateWindowsDeviceAccountActionParameterParameterValue?.deviceAccountEmail ;
        this.exchangeServer = updateWindowsDeviceAccountActionParameterParameterValue?.exchangeServer ;
        this.passwordRotationEnabled = updateWindowsDeviceAccountActionParameterParameterValue?.passwordRotationEnabled ;
        this.sessionInitiationProtocalAddress = updateWindowsDeviceAccountActionParameterParameterValue?.sessionInitiationProtocalAddress ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "calendarSyncEnabled": n => { this.calendarSyncEnabled = n.getBooleanValue(); },
            "deviceAccount": n => { this.deviceAccount = n.getObjectValue<WindowsDeviceAccountImpl>(createWindowsDeviceAccountFromDiscriminatorValue); },
            "deviceAccountEmail": n => { this.deviceAccountEmail = n.getStringValue(); },
            "exchangeServer": n => { this.exchangeServer = n.getStringValue(); },
            "passwordRotationEnabled": n => { this.passwordRotationEnabled = n.getBooleanValue(); },
            "sessionInitiationProtocalAddress": n => { this.sessionInitiationProtocalAddress = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.calendarSyncEnabled){
        writer.writeBooleanValue("calendarSyncEnabled", this.calendarSyncEnabled);
        }
        if(this.deviceAccount){
        writer.writeObjectValue<WindowsDeviceAccountImpl>("deviceAccount", new WindowsDeviceAccountImpl(this.deviceAccount));
        }
        if(this.deviceAccountEmail){
        writer.writeStringValue("deviceAccountEmail", this.deviceAccountEmail);
        }
        if(this.exchangeServer){
        writer.writeStringValue("exchangeServer", this.exchangeServer);
        }
        if(this.passwordRotationEnabled){
        writer.writeBooleanValue("passwordRotationEnabled", this.passwordRotationEnabled);
        }
        if(this.sessionInitiationProtocalAddress){
        writer.writeStringValue("sessionInitiationProtocalAddress", this.sessionInitiationProtocalAddress);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
