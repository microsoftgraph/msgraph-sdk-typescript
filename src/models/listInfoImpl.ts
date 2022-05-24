import {ListInfo} from './listInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ListInfoImpl implements AdditionalDataHolder, ListInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** If true, indicates that content types are enabled for this list. */
    public contentTypesEnabled?: boolean | undefined;
    /** If true, indicates that the list is not normally visible in the SharePoint user experience. */
    public hidden?: boolean | undefined;
    /** An enumerated value that represents the base list template used in creating the list. Possible values include documentLibrary, genericList, task, survey, announcements, contacts, and more. */
    public template?: string | undefined;
    /**
     * Instantiates a new listInfo and sets the default values.
     * @param listInfoParameterValue 
     */
    public constructor(listInfoParameterValue?: ListInfo | undefined) {
        this.additionalData = listInfoParameterValue?.additionalData ? listInfoParameterValue?.additionalData! : {}
        this.contentTypesEnabled = listInfoParameterValue?.contentTypesEnabled ;
        this.hidden = listInfoParameterValue?.hidden ;
        this.template = listInfoParameterValue?.template ;
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
}
