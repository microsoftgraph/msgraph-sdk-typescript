import {LookupColumn} from './lookupColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LookupColumnImpl implements AdditionalDataHolder, LookupColumn, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether multiple values can be selected from the source. */
    public allowMultipleValues?: boolean | undefined;
    /** Indicates whether values in the column should be able to exceed the standard limit of 255 characters. */
    public allowUnlimitedLength?: boolean | undefined;
    /** The name of the lookup source column. */
    public columnName?: string | undefined;
    /** The unique identifier of the lookup source list. */
    public listId?: string | undefined;
    /** If specified, this column is a secondary lookup, pulling an additional field from the list item looked up by the primary lookup. Use the list item looked up by the primary as the source for the column named here. */
    public primaryLookupColumnId?: string | undefined;
    /**
     * Instantiates a new lookupColumn and sets the default values.
     * @param lookupColumnParameterValue 
     */
    public constructor(lookupColumnParameterValue?: LookupColumn | undefined) {
        this.additionalData = lookupColumnParameterValue?.additionalData ? lookupColumnParameterValue?.additionalData! : {}
        this.allowMultipleValues = lookupColumnParameterValue?.allowMultipleValues ;
        this.allowUnlimitedLength = lookupColumnParameterValue?.allowUnlimitedLength ;
        this.columnName = lookupColumnParameterValue?.columnName ;
        this.listId = lookupColumnParameterValue?.listId ;
        this.primaryLookupColumnId = lookupColumnParameterValue?.primaryLookupColumnId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowMultipleValues": n => { this.allowMultipleValues = n.getBooleanValue(); },
            "allowUnlimitedLength": n => { this.allowUnlimitedLength = n.getBooleanValue(); },
            "columnName": n => { this.columnName = n.getStringValue(); },
            "listId": n => { this.listId = n.getStringValue(); },
            "primaryLookupColumnId": n => { this.primaryLookupColumnId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowMultipleValues){
        writer.writeBooleanValue("allowMultipleValues", this.allowMultipleValues);
        }
        if(this.allowUnlimitedLength){
        writer.writeBooleanValue("allowUnlimitedLength", this.allowUnlimitedLength);
        }
        if(this.columnName){
        writer.writeStringValue("columnName", this.columnName);
        }
        if(this.listId){
        writer.writeStringValue("listId", this.listId);
        }
        if(this.primaryLookupColumnId){
        writer.writeStringValue("primaryLookupColumnId", this.primaryLookupColumnId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
