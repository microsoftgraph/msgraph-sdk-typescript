import {ListInfo} from './listInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ListInfoImpl implements ListInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** If true, indicates that content types are enabled for this list. */
    private _contentTypesEnabled?: boolean | undefined;
    /** If true, indicates that the list is not normally visible in the SharePoint user experience. */
    private _hidden?: boolean | undefined;
    /** An enumerated value that represents the base list template used in creating the list. Possible values include documentLibrary, genericList, task, survey, announcements, contacts, and more. */
    private _template?: string | undefined;
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
     * Instantiates a new listInfo and sets the default values.
     * @param listInfoParameterValue 
     */
    public constructor(listInfoParameterValue?: ListInfo | undefined) {
        this._additionalData = listInfoParameterValue?.additionalData ? listInfoParameterValue?.additionalData! : {};
        this._contentTypesEnabled = listInfoParameterValue?.contentTypesEnabled;
        this._hidden = listInfoParameterValue?.hidden;
        this._template = listInfoParameterValue?.template;
    };
    /**
     * Gets the contentTypesEnabled property value. If true, indicates that content types are enabled for this list.
     * @returns a boolean
     */
    public get contentTypesEnabled() {
        return this._contentTypesEnabled;
    };
    /**
     * Sets the contentTypesEnabled property value. If true, indicates that content types are enabled for this list.
     * @param value Value to set for the contentTypesEnabled property.
     */
    public set contentTypesEnabled(value: boolean | undefined) {
        if(value) {
            this._contentTypesEnabled = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contentTypesEnabled": n => { this.contentTypesEnabled = n.getBooleanValue(); },
            "hidden": n => { this.hidden = n.getBooleanValue(); },
            "template": n => { this.template = n.getStringValue(); },
        };
    };
    /**
     * Gets the hidden property value. If true, indicates that the list is not normally visible in the SharePoint user experience.
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Sets the hidden property value. If true, indicates that the list is not normally visible in the SharePoint user experience.
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        if(value) {
            this._hidden = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.contentTypesEnabled){
            writer.writeBooleanValue("contentTypesEnabled", this.contentTypesEnabled);
        }
        if(this.hidden){
            writer.writeBooleanValue("hidden", this.hidden);
        }
        if(this.template){
            writer.writeStringValue("template", this.template);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the template property value. An enumerated value that represents the base list template used in creating the list. Possible values include documentLibrary, genericList, task, survey, announcements, contacts, and more.
     * @returns a string
     */
    public get template() {
        return this._template;
    };
    /**
     * Sets the template property value. An enumerated value that represents the base list template used in creating the list. Possible values include documentLibrary, genericList, task, survey, announcements, contacts, and more.
     * @param value Value to set for the template property.
     */
    public set template(value: string | undefined) {
        if(value) {
            this._template = value;
        }
    };
}
