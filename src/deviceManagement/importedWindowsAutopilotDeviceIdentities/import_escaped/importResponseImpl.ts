import {ImportedWindowsAutopilotDeviceIdentityImpl} from '../../../models/';
import {createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue} from '../../../models/createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue';
import {ImportedWindowsAutopilotDeviceIdentity} from '../../../models/importedWindowsAutopilotDeviceIdentity';
import {ImportResponse} from './importResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the import method. */
export class ImportResponseImpl implements ImportResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The value property */
    private _value?: ImportedWindowsAutopilotDeviceIdentity[] | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new importResponse and sets the default values.
     * @param importResponseParameterValue 
     */
    public constructor(importResponseParameterValue?: ImportResponse | undefined) {
        this._additionalData = importResponseParameterValue?.additionalData ? importResponseParameterValue?.additionalData! : {};
        this._value = importResponseParameterValue?.value;
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
        if(this.value && this.value.length != 0){        const valueArrValue: ImportedWindowsAutopilotDeviceIdentityImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof ImportedWindowsAutopilotDeviceIdentityImpl? element:new ImportedWindowsAutopilotDeviceIdentityImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentityImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a ImportedWindowsAutopilotDeviceIdentityInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ImportedWindowsAutopilotDeviceIdentity[] | undefined) {
        if(value) {
            const valueArrValue: ImportedWindowsAutopilotDeviceIdentityImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof ImportedWindowsAutopilotDeviceIdentityImpl? element:new ImportedWindowsAutopilotDeviceIdentityImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
