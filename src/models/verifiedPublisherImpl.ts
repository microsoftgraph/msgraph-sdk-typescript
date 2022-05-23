import {VerifiedPublisher} from './verifiedPublisher';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VerifiedPublisherImpl implements AdditionalDataHolder, Parsable, VerifiedPublisher {
    /** The timestamp when the verified publisher was first added or most recently updated. */
    public addedDateTime?: Date | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The verified publisher name from the app publisher's Microsoft Partner Network (MPN) account. */
    public displayName?: string | undefined;
    /** The ID of the verified publisher from the app publisher's Partner Center account. */
    public verifiedPublisherId?: string | undefined;
    /**
     * Instantiates a new verifiedPublisher and sets the default values.
     * @param verifiedPublisherParameterValue 
     */
    public constructor(verifiedPublisherParameterValue?: VerifiedPublisher | undefined) {
        this.addedDateTime = verifiedPublisherParameterValue?.addedDateTime ;
        this.additionalData = verifiedPublisherParameterValue?.additionalData ? verifiedPublisherParameterValue?.additionalData! : {}
        this.displayName = verifiedPublisherParameterValue?.displayName ;
        this.verifiedPublisherId = verifiedPublisherParameterValue?.verifiedPublisherId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "addedDateTime": n => { this.addedDateTime = n.getDateValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "verifiedPublisherId": n => { this.verifiedPublisherId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.addedDateTime){
        writer.writeDateValue("addedDateTime", this.addedDateTime);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.verifiedPublisherId){
        writer.writeStringValue("verifiedPublisherId", this.verifiedPublisherId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
