import {ImportedWindowsAutopilotDeviceIdentityImpl} from '../../../models/';
import {createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue} from '../../../models/createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import {ImportedWindowsAutopilotDeviceIdentity} from '../../../models/importedWindowsAutopilotDeviceIdentity';
import {ImportResponse} from './importResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the import method. */
export class ImportResponseImpl implements AdditionalDataHolder, ImportResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
    /**
     * Instantiates a new importResponse and sets the default values.
     * @param importResponseParameterValue 
     */
    public constructor(importResponseParameterValue?: ImportResponse | undefined) {
        this.additionalData = importResponseParameterValue?.additionalData ? importResponseParameterValue?.additionalData! : {}
        this.value = importResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentityImpl>(createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: ImportedWindowsAutopilotDeviceIdentityImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ImportedWindowsAutopilotDeviceIdentityImpl(element));});
        writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentityImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
