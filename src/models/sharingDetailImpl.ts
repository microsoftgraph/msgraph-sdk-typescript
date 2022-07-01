import {createInsightIdentityFromDiscriminatorValue} from './createInsightIdentityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {InsightIdentityImpl, ResourceReferenceImpl} from './index';
import {InsightIdentity} from './insightIdentity';
import {ResourceReference} from './resourceReference';
import {SharingDetail} from './sharingDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharingDetailImpl implements SharingDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The user who shared the document. */
    private _sharedBy?: InsightIdentity | undefined;
    /** The date and time the file was last shared. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _sharedDateTime?: Date | undefined;
    /** The sharingReference property */
    private _sharingReference?: ResourceReference | undefined;
    /** The subject with which the document was shared. */
    private _sharingSubject?: string | undefined;
    /** Determines the way the document was shared, can be by a 'Link', 'Attachment', 'Group', 'Site'. */
    private _sharingType?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new sharingDetail and sets the default values.
     * @param sharingDetailParameterValue 
     */
    public constructor(sharingDetailParameterValue?: SharingDetail | undefined) {
        this._additionalData = sharingDetailParameterValue?.additionalData ? sharingDetailParameterValue?.additionalData! : {};
        this._sharedBy = sharingDetailParameterValue?.sharedBy;
        this._sharedDateTime = sharingDetailParameterValue?.sharedDateTime;
        this._sharingReference = sharingDetailParameterValue?.sharingReference;
        this._sharingSubject = sharingDetailParameterValue?.sharingSubject;
        this._sharingType = sharingDetailParameterValue?.sharingType;
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
            writer.writeObjectValue<InsightIdentityImpl>("sharedBy", (this.sharedBy instanceof InsightIdentityImpl? this.sharedBy as InsightIdentityImpl: new InsightIdentityImpl(this.sharedBy)));
        }
        if(this.sharedDateTime){
            writer.writeDateValue("sharedDateTime", this.sharedDateTime);
        }
        if(this.sharingReference){
            writer.writeObjectValue<ResourceReferenceImpl>("sharingReference", (this.sharingReference instanceof ResourceReferenceImpl? this.sharingReference as ResourceReferenceImpl: new ResourceReferenceImpl(this.sharingReference)));
        }
        if(this.sharingSubject){
            writer.writeStringValue("sharingSubject", this.sharingSubject);
        }
        if(this.sharingType){
            writer.writeStringValue("sharingType", this.sharingType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sharedBy property value. The user who shared the document.
     * @returns a InsightIdentityInterface
     */
    public get sharedBy() {
        return this._sharedBy;
    };
    /**
     * Sets the sharedBy property value. The user who shared the document.
     * @param value Value to set for the sharedBy property.
     */
    public set sharedBy(value: InsightIdentity | undefined) {
        if(value) {
            this._sharedBy = value instanceof InsightIdentityImpl? value as InsightIdentityImpl: new InsightIdentityImpl(value);
        }
    };
    /**
     * Gets the sharedDateTime property value. The date and time the file was last shared. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get sharedDateTime() {
        return this._sharedDateTime;
    };
    /**
     * Sets the sharedDateTime property value. The date and time the file was last shared. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the sharedDateTime property.
     */
    public set sharedDateTime(value: Date | undefined) {
        if(value) {
            this._sharedDateTime = value;
        }
    };
    /**
     * Gets the sharingReference property value. The sharingReference property
     * @returns a ResourceReferenceInterface
     */
    public get sharingReference() {
        return this._sharingReference;
    };
    /**
     * Sets the sharingReference property value. The sharingReference property
     * @param value Value to set for the sharingReference property.
     */
    public set sharingReference(value: ResourceReference | undefined) {
        if(value) {
            this._sharingReference = value instanceof ResourceReferenceImpl? value as ResourceReferenceImpl: new ResourceReferenceImpl(value);
        }
    };
    /**
     * Gets the sharingSubject property value. The subject with which the document was shared.
     * @returns a string
     */
    public get sharingSubject() {
        return this._sharingSubject;
    };
    /**
     * Sets the sharingSubject property value. The subject with which the document was shared.
     * @param value Value to set for the sharingSubject property.
     */
    public set sharingSubject(value: string | undefined) {
        if(value) {
            this._sharingSubject = value;
        }
    };
    /**
     * Gets the sharingType property value. Determines the way the document was shared, can be by a 'Link', 'Attachment', 'Group', 'Site'.
     * @returns a string
     */
    public get sharingType() {
        return this._sharingType;
    };
    /**
     * Sets the sharingType property value. Determines the way the document was shared, can be by a 'Link', 'Attachment', 'Group', 'Site'.
     * @param value Value to set for the sharingType property.
     */
    public set sharingType(value: string | undefined) {
        if(value) {
            this._sharingType = value;
        }
    };
}
