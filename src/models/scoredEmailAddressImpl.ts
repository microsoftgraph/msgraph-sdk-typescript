import {ScoredEmailAddress} from './scoredEmailAddress';
import {SelectionLikelihoodInfo} from './selectionLikelihoodInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScoredEmailAddressImpl implements AdditionalDataHolder, Parsable, ScoredEmailAddress {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The email address. */
    public address?: string | undefined;
    /** The itemId property */
    public itemId?: string | undefined;
    /** The relevance score of the email address. A relevance score is used as a sort key, in relation to the other returned results. A higher relevance score value corresponds to a more relevant result. Relevance is determined by the user’s communication and collaboration patterns and business relationships. */
    public relevanceScore?: number | undefined;
    /** The selectionLikelihood property */
    public selectionLikelihood?: SelectionLikelihoodInfo | undefined;
    /**
     * Instantiates a new scoredEmailAddress and sets the default values.
     * @param scoredEmailAddressParameterValue 
     */
    public constructor(scoredEmailAddressParameterValue?: ScoredEmailAddress | undefined) {
        this.additionalData = scoredEmailAddressParameterValue?.additionalData ? scoredEmailAddressParameterValue?.additionalData! : {}
        this.address = scoredEmailAddressParameterValue?.address ;
        this.itemId = scoredEmailAddressParameterValue?.itemId ;
        this.relevanceScore = scoredEmailAddressParameterValue?.relevanceScore ;
        this.selectionLikelihood = scoredEmailAddressParameterValue?.selectionLikelihood ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "address": n => { this.address = n.getStringValue(); },
            "itemId": n => { this.itemId = n.getStringValue(); },
            "relevanceScore": n => { this.relevanceScore = n.getNumberValue(); },
            "selectionLikelihood": n => { this.selectionLikelihood = n.getEnumValue<SelectionLikelihoodInfo>(SelectionLikelihoodInfo); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.address){
        writer.writeStringValue("address", this.address);
        }
        if(this.itemId){
        writer.writeStringValue("itemId", this.itemId);
        }
        if(this.relevanceScore){
        writer.writeNumberValue("relevanceScore", this.relevanceScore);
        }
        if(this.selectionLikelihood){
        writer.writeEnumValue<SelectionLikelihoodInfo>("selectionLikelihood", this.selectionLikelihood);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
