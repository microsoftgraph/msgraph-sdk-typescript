import {SortProperty} from './sortProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SortPropertyImpl implements AdditionalDataHolder, Parsable, SortProperty {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** True if the sort order is descending. Default is false, with the sort order as ascending. Optional. */
    public isDescending?: boolean | undefined;
    /** The name of the property to sort on. Required. */
    public name?: string | undefined;
    /**
     * Instantiates a new sortProperty and sets the default values.
     * @param sortPropertyParameterValue 
     */
    public constructor(sortPropertyParameterValue?: SortProperty | undefined) {
        this.additionalData = sortPropertyParameterValue?.additionalData ? sortPropertyParameterValue?.additionalData! : {}
        this.isDescending = sortPropertyParameterValue?.isDescending ;
        this.name = sortPropertyParameterValue?.name ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isDescending": n => { this.isDescending = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isDescending){
        writer.writeBooleanValue("isDescending", this.isDescending);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
