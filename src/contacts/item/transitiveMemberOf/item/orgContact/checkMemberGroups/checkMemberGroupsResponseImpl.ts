import {CheckMemberGroupsResponse} from './checkMemberGroupsResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the checkMemberGroups method. */
export class CheckMemberGroupsResponseImpl implements AdditionalDataHolder, CheckMemberGroupsResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: string[] | undefined;
    /**
     * Instantiates a new checkMemberGroupsResponse and sets the default values.
     * @param checkMemberGroupsResponseParameterValue 
     */
    public constructor(checkMemberGroupsResponseParameterValue?: CheckMemberGroupsResponse | undefined) {
        this.additionalData = checkMemberGroupsResponseParameterValue?.additionalData ? checkMemberGroupsResponseParameterValue?.additionalData! : {}
        this.value = checkMemberGroupsResponseParameterValue?.value ;
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
