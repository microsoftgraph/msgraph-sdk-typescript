import {CheckMemberObjectsResponse} from './checkMemberObjectsResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the checkMemberObjects method. */
export class CheckMemberObjectsResponseImpl implements AdditionalDataHolder, CheckMemberObjectsResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: string[] | undefined;
    /**
     * Instantiates a new checkMemberObjectsResponse and sets the default values.
     * @param checkMemberObjectsResponseParameterValue 
     */
    public constructor(checkMemberObjectsResponseParameterValue?: CheckMemberObjectsResponse | undefined) {
        this.additionalData = checkMemberObjectsResponseParameterValue?.additionalData ? checkMemberObjectsResponseParameterValue?.additionalData! : {}
        this.value = checkMemberObjectsResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value){
        writer.writeCollectionOfPrimitiveValues<string>("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
