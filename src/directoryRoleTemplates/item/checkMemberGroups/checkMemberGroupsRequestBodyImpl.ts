import {CheckMemberGroupsRequestBody} from './checkMemberGroupsRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the checkMemberGroups method.  */
export class CheckMemberGroupsRequestBodyImpl implements AdditionalDataHolder, CheckMemberGroupsRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The groupIds property  */
    groupIds?: string[] | undefined;
    /**
     * Instantiates a new checkMemberGroupsRequestBody and sets the default values.
     * @param checkMemberGroupsRequestBodyParameterValue 
     */
    public constructor(checkMemberGroupsRequestBodyParameterValue?: CheckMemberGroupsRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = checkMemberGroupsRequestBodyParameterValue?.additionalData ? {} : checkMemberGroupsRequestBodyParameterValue?.additionalData!
        this.groupIds = checkMemberGroupsRequestBodyParameterValue?.groupIds ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "groupIds": n => { this.groupIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.groupIds){
        if(this.groupIds)
        writer.writeCollectionOfPrimitiveValues<string>("groupIds", this.groupIds);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
