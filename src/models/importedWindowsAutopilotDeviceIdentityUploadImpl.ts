import {createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue} from './createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import {ImportedWindowsAutopilotDeviceIdentity} from './importedWindowsAutopilotDeviceIdentity';
import {ImportedWindowsAutopilotDeviceIdentityUpload} from './importedWindowsAutopilotDeviceIdentityUpload';
import {ImportedWindowsAutopilotDeviceIdentityUploadStatus} from './importedWindowsAutopilotDeviceIdentityUploadStatus';
import {EntityImpl, ImportedWindowsAutopilotDeviceIdentityImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ImportedWindowsAutopilotDeviceIdentityUploadImpl extends EntityImpl implements ImportedWindowsAutopilotDeviceIdentityUpload {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** DateTime when the entity is created. */
    public createdDateTimeUtc?: Date | undefined;
    /** Collection of all Autopilot devices as a part of this upload. */
    public deviceIdentities?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
    /** Upload status. */
    public status?: ImportedWindowsAutopilotDeviceIdentityUploadStatus | undefined;
    /**
     * Instantiates a new ImportedWindowsAutopilotDeviceIdentityUpload and sets the default values.
     * @param importedWindowsAutopilotDeviceIdentityUploadParameterValue 
     */
    public constructor(importedWindowsAutopilotDeviceIdentityUploadParameterValue?: ImportedWindowsAutopilotDeviceIdentityUpload | undefined) {
        super(importedWindowsAutopilotDeviceIdentityUploadParameterValue);
        this.additionalData = importedWindowsAutopilotDeviceIdentityUploadParameterValue?.additionalData ? importedWindowsAutopilotDeviceIdentityUploadParameterValue?.additionalData! : {};
        this.createdDateTimeUtc = importedWindowsAutopilotDeviceIdentityUploadParameterValue?.createdDateTimeUtc;
        const deviceIdentitiesArrValue: ImportedWindowsAutopilotDeviceIdentityImpl[] = []; importedWindowsAutopilotDeviceIdentityUploadParameterValue.deviceIdentities?.forEach(element => {deviceIdentitiesArrValue.push(element instanceof ImportedWindowsAutopilotDeviceIdentityImpl? element : new ImportedWindowsAutopilotDeviceIdentityImpl(element));});
        this.deviceIdentities = deviceIdentitiesArrValue;
        this.status = importedWindowsAutopilotDeviceIdentityUploadParameterValue?.status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTimeUtc": n => { this.createdDateTimeUtc = n.getDateValue(); },
            "deviceIdentities": n => { this.deviceIdentities = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentityImpl>(createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<ImportedWindowsAutopilotDeviceIdentityUploadStatus>(ImportedWindowsAutopilotDeviceIdentityUploadStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTimeUtc){
            writer.writeDateValue("createdDateTimeUtc", this.createdDateTimeUtc);
        }
        if(this.deviceIdentities && this.deviceIdentities.length != 0){        const deviceIdentitiesArrValue: ImportedWindowsAutopilotDeviceIdentityImpl[] = []; this.deviceIdentities?.forEach(element => {deviceIdentitiesArrValue.push(element instanceof ImportedWindowsAutopilotDeviceIdentityImpl? element : new ImportedWindowsAutopilotDeviceIdentityImpl(element));});
            writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentityImpl>("deviceIdentities", deviceIdentitiesArrValue);
        }
        if(this.status){
            writer.writeEnumValue<ImportedWindowsAutopilotDeviceIdentityUploadStatus>("status", this.status);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
