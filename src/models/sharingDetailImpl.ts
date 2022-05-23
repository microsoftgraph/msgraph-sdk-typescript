import {createInsightIdentityFromDiscriminatorValue} from './createInsightIdentityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {InsightIdentityImpl, ResourceReferenceImpl} from './index';
import {InsightIdentity} from './insightIdentity';
import {ResourceReference} from './resourceReference';
import {SharingDetail} from './sharingDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharingDetailImpl implements AdditionalDataHolder, Parsable, SharingDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The user who shared the document. */
    public sharedBy?: InsightIdentity | undefined;
    /** The date and time the file was last shared. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public sharedDateTime?: Date | undefined;
    /** The sharingReference property */
    public sharingReference?: ResourceReference | undefined;
    /** The subject with which the document was shared. */
    public sharingSubject?: string | undefined;
    /** Determines the way the document was shared, can be by a 'Link', 'Attachment', 'Group', 'Site'. */
    public sharingType?: string | undefined;
    /**
     * Instantiates a new sharingDetail and sets the default values.
     * @param sharingDetailParameterValue 
     */
    public constructor(sharingDetailParameterValue?: SharingDetail | undefined) {
        this.additionalData = sharingDetailParameterValue?.additionalData ? sharingDetailParameterValue?.additionalData! : {}
        this.sharedBy = sharingDetailParameterValue?.sharedBy ;
        this.sharedDateTime = sharingDetailParameterValue?.sharedDateTime ;
        this.sharingReference = sharingDetailParameterValue?.sharingReference ;
        this.sharingSubject = sharingDetailParameterValue?.sharingSubject ;
        this.sharingType = sharingDetailParameterValue?.sharingType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "sharedBy": n => { this.sharedBy = n.getObjectValue<InsightIdentityImpl>(createInsightIdentityFromDiscriminatorValue); },
            "sharedDateTime": n => { this.sharedDateTime = n.getDateValue(); },
            "sharingReference": n => { this.sharingReference = n.getObjectValue<ResourceReferenceImpl>(createResourceReferenceFromDiscriminatorValue); },
            "sharingSubject": n => { this.sharingSubject = n.getStringValue(); },
            "sharingType": n => { this.sharingType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.sharedBy){
        writer.writeObjectValue<InsightIdentityImpl>("sharedBy", new InsightIdentityImpl(this.sharedBy));
        }
        if(this.sharedDateTime){
        writer.writeDateValue("sharedDateTime", this.sharedDateTime);
        }
        if(this.sharingReference){
        writer.writeObjectValue<ResourceReferenceImpl>("sharingReference", new ResourceReferenceImpl(this.sharingReference));
        }
        if(this.sharingSubject){
        writer.writeStringValue("sharingSubject", this.sharingSubject);
        }
        if(this.sharingType){
        writer.writeStringValue("sharingType", this.sharingType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
