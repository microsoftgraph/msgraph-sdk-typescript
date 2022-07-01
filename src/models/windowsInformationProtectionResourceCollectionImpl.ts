import {WindowsInformationProtectionResourceCollection} from './windowsInformationProtectionResourceCollection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection Resource Collection */
export class WindowsInformationProtectionResourceCollectionImpl implements WindowsInformationProtectionResourceCollection {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Display name */
    private _displayName?: string | undefined;
    /** Collection of resources */
    private _resources?: string[] | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new windowsInformationProtectionResourceCollection and sets the default values.
     * @param windowsInformationProtectionResourceCollectionParameterValue 
     */
    public constructor(windowsInformationProtectionResourceCollectionParameterValue?: WindowsInformationProtectionResourceCollection | undefined) {
        this._additionalData = windowsInformationProtectionResourceCollectionParameterValue?.additionalData ? windowsInformationProtectionResourceCollectionParameterValue?.additionalData! : {};
        this._displayName = windowsInformationProtectionResourceCollectionParameterValue?.displayName;
        this._resources = windowsInformationProtectionResourceCollectionParameterValue?.resources;
    };
    /**
     * Gets the displayName property value. Display name
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "resources": n => { this.resources = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the resources property value. Collection of resources
     * @returns a string
     */
    public get resources() {
        return this._resources;
    };
    /**
     * Sets the resources property value. Collection of resources
     * @param value Value to set for the resources property.
     */
    public set resources(value: string[] | undefined) {
        if(value) {
            this._resources = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.resources){
            writer.writeCollectionOfPrimitiveValues<string>("resources", this.resources);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
