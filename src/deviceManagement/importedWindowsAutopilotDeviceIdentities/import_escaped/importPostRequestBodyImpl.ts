import {ImportedWindowsAutopilotDeviceIdentityImpl} from '../../../models/';
import {createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue} from '../../../models/createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import {ImportedWindowsAutopilotDeviceIdentity} from '../../../models/importedWindowsAutopilotDeviceIdentity';
import {ImportPostRequestBody} from './importPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the import method. */
export class ImportPostRequestBodyImpl implements AdditionalDataHolder, ImportPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The importedWindowsAutopilotDeviceIdentities property */
    public importedWindowsAutopilotDeviceIdentities?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
    /**
     * Instantiates a new importPostRequestBody and sets the default values.
     * @param importPostRequestBodyParameterValue 
     */
    public constructor(importPostRequestBodyParameterValue?: ImportPostRequestBody | undefined) {
        this.additionalData = importPostRequestBodyParameterValue?.additionalData ? importPostRequestBodyParameterValue?.additionalData! : {}
        this.importedWindowsAutopilotDeviceIdentities = importPostRequestBodyParameterValue?.importedWindowsAutopilotDeviceIdentities ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "importedWindowsAutopilotDeviceIdentities": n => { this.importedWindowsAutopilotDeviceIdentities = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentityImpl>(createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.importedWindowsAutopilotDeviceIdentities && this.importedWindowsAutopilotDeviceIdentities.length != 0){        const importedWindowsAutopilotDeviceIdentitiesArrValue: ImportedWindowsAutopilotDeviceIdentityImpl[] = []; this.importedWindowsAutopilotDeviceIdentities?.forEach(element => {importedWindowsAutopilotDeviceIdentitiesArrValue.push(new ImportedWindowsAutopilotDeviceIdentityImpl(element));});
        writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentityImpl>("importedWindowsAutopilotDeviceIdentities", importedWindowsAutopilotDeviceIdentitiesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
