import {PersonOrGroupColumn} from './personOrGroupColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonOrGroupColumnImpl implements PersonOrGroupColumn {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether multiple values can be selected from the source. */
    private _allowMultipleSelection?: boolean | undefined;
    /** Whether to allow selection of people only, or people and groups. Must be one of peopleAndGroups or peopleOnly. */
    private _chooseFromType?: string | undefined;
    /** How to display the information about the person or group chosen. See below. */
    private _displayAs?: string | undefined;
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
     * Gets the allowMultipleSelection property value. Indicates whether multiple values can be selected from the source.
     * @returns a boolean
     */
    public get allowMultipleSelection() {
        return this._allowMultipleSelection;
    };
    /**
     * Sets the allowMultipleSelection property value. Indicates whether multiple values can be selected from the source.
     * @param value Value to set for the allowMultipleSelection property.
     */
    public set allowMultipleSelection(value: boolean | undefined) {
        if(value) {
            this._allowMultipleSelection = value;
        }
    };
    /**
     * Gets the chooseFromType property value. Whether to allow selection of people only, or people and groups. Must be one of peopleAndGroups or peopleOnly.
     * @returns a string
     */
    public get chooseFromType() {
        return this._chooseFromType;
    };
    /**
     * Sets the chooseFromType property value. Whether to allow selection of people only, or people and groups. Must be one of peopleAndGroups or peopleOnly.
     * @param value Value to set for the chooseFromType property.
     */
    public set chooseFromType(value: string | undefined) {
        if(value) {
            this._chooseFromType = value;
        }
    };
    /**
     * Instantiates a new personOrGroupColumn and sets the default values.
     * @param personOrGroupColumnParameterValue 
     */
    public constructor(personOrGroupColumnParameterValue?: PersonOrGroupColumn | undefined) {
        this._additionalData = personOrGroupColumnParameterValue?.additionalData ? personOrGroupColumnParameterValue?.additionalData! : {};
        this._allowMultipleSelection = personOrGroupColumnParameterValue?.allowMultipleSelection;
        this._chooseFromType = personOrGroupColumnParameterValue?.chooseFromType;
        this._displayAs = personOrGroupColumnParameterValue?.displayAs;
    };
    /**
     * Gets the displayAs property value. How to display the information about the person or group chosen. See below.
     * @returns a string
     */
    public get displayAs() {
        return this._displayAs;
    };
    /**
     * Sets the displayAs property value. How to display the information about the person or group chosen. See below.
     * @param value Value to set for the displayAs property.
     */
    public set displayAs(value: string | undefined) {
        if(value) {
            this._displayAs = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowMultipleSelection": n => { this.allowMultipleSelection = n.getBooleanValue(); },
            "chooseFromType": n => { this.chooseFromType = n.getStringValue(); },
            "displayAs": n => { this.displayAs = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowMultipleSelection){
            writer.writeBooleanValue("allowMultipleSelection", this.allowMultipleSelection);
        }
        if(this.chooseFromType){
            writer.writeStringValue("chooseFromType", this.chooseFromType);
        }
        if(this.displayAs){
            writer.writeStringValue("displayAs", this.displayAs);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
