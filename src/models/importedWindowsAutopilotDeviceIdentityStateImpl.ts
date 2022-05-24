import {ImportedWindowsAutopilotDeviceIdentityImportStatus} from './importedWindowsAutopilotDeviceIdentityImportStatus';
import {ImportedWindowsAutopilotDeviceIdentityState} from './importedWindowsAutopilotDeviceIdentityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImportedWindowsAutopilotDeviceIdentityStateImpl implements AdditionalDataHolder, ImportedWindowsAutopilotDeviceIdentityState, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Device error code reported by Device Directory Service(DDS). */
    public deviceErrorCode?: number | undefined;
    /** Device error name reported by Device Directory Service(DDS). */
    public deviceErrorName?: string | undefined;
    /** Device status reported by Device Directory Service(DDS). Possible values are: unknown, pending, partial, complete, error. */
    public deviceImportStatus?: ImportedWindowsAutopilotDeviceIdentityImportStatus | undefined;
    /** Device Registration ID for successfully added device reported by Device Directory Service(DDS). */
    public deviceRegistrationId?: string | undefined;
    /**
     * Instantiates a new importedWindowsAutopilotDeviceIdentityState and sets the default values.
     * @param importedWindowsAutopilotDeviceIdentityStateParameterValue 
     */
    public constructor(importedWindowsAutopilotDeviceIdentityStateParameterValue?: ImportedWindowsAutopilotDeviceIdentityState | undefined) {
        this.additionalData = importedWindowsAutopilotDeviceIdentityStateParameterValue?.additionalData ? importedWindowsAutopilotDeviceIdentityStateParameterValue?.additionalData! : {}
        this.deviceErrorCode = importedWindowsAutopilotDeviceIdentityStateParameterValue?.deviceErrorCode ;
        this.deviceErrorName = importedWindowsAutopilotDeviceIdentityStateParameterValue?.deviceErrorName ;
        this.deviceImportStatus = importedWindowsAutopilotDeviceIdentityStateParameterValue?.deviceImportStatus ;
        this.deviceRegistrationId = importedWindowsAutopilotDeviceIdentityStateParameterValue?.deviceRegistrationId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deviceErrorCode": n => { this.deviceErrorCode = n.getNumberValue(); },
            "deviceErrorName": n => { this.deviceErrorName = n.getStringValue(); },
            "deviceImportStatus": n => { this.deviceImportStatus = n.getEnumValue<ImportedWindowsAutopilotDeviceIdentityImportStatus>(ImportedWindowsAutopilotDeviceIdentityImportStatus); },
            "deviceRegistrationId": n => { this.deviceRegistrationId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.deviceErrorCode){
        writer.writeNumberValue("deviceErrorCode", this.deviceErrorCode);
        }
        if(this.deviceErrorName){
        writer.writeStringValue("deviceErrorName", this.deviceErrorName);
        }
        if(this.deviceImportStatus){
        writer.writeEnumValue<ImportedWindowsAutopilotDeviceIdentityImportStatus>("deviceImportStatus", this.deviceImportStatus);
        }
        if(this.deviceRegistrationId){
        writer.writeStringValue("deviceRegistrationId", this.deviceRegistrationId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
