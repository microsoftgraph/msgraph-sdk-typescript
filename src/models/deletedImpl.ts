import {Deleted} from './deleted';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeletedImpl implements AdditionalDataHolder, Deleted, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the state of the deleted item. */
    public state?: string | undefined;
    /**
     * Instantiates a new deleted and sets the default values.
     * @param deletedParameterValue 
     */
    public constructor(deletedParameterValue?: Deleted | undefined) {
        this.additionalData = deletedParameterValue?.additionalData ? deletedParameterValue?.additionalData! : {}
        this.state = deletedParameterValue?.state ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "state": n => { this.state = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.state){
        writer.writeStringValue("state", this.state);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
