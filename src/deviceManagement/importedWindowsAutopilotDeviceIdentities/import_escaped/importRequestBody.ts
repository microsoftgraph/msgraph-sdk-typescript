import {ImportedWindowsAutopilotDeviceIdentity} from '../../../models/microsoft/graph/';
import {createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue} from '../../../models/microsoft/graph/createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the import method.  */
export class ImportRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    private _importedWindowsAutopilotDeviceIdentities?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new importRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "importedWindowsAutopilotDeviceIdentities": (o, n) => { (o as unknown as ImportRequestBody).importedWindowsAutopilotDeviceIdentities = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>(createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the importedWindowsAutopilotDeviceIdentities property value. 
     * @returns a importedWindowsAutopilotDeviceIdentity
     */
    public get importedWindowsAutopilotDeviceIdentities() {
        return this._importedWindowsAutopilotDeviceIdentities;
    };
    /**
     * Sets the importedWindowsAutopilotDeviceIdentities property value. 
     * @param value Value to set for the importedWindowsAutopilotDeviceIdentities property.
     */
    public set importedWindowsAutopilotDeviceIdentities(value: ImportedWindowsAutopilotDeviceIdentity[] | undefined) {
        this._importedWindowsAutopilotDeviceIdentities = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>("importedWindowsAutopilotDeviceIdentities", this.importedWindowsAutopilotDeviceIdentities);
        writer.writeAdditionalData(this.additionalData);
    };
}
