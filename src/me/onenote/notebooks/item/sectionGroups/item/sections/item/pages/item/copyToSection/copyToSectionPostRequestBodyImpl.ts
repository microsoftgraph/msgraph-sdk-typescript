import {CopyToSectionPostRequestBody} from './copyToSectionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the copyToSection method. */
export class CopyToSectionPostRequestBodyImpl implements CopyToSectionPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The groupId property */
    private _groupId?: string | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The siteCollectionId property */
    private _siteCollectionId?: string | undefined;
    /** The siteId property */
    private _siteId?: string | undefined;
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
     * Instantiates a new copyToSectionPostRequestBody and sets the default values.
     * @param copyToSectionPostRequestBodyParameterValue 
     */
    public constructor(copyToSectionPostRequestBodyParameterValue?: CopyToSectionPostRequestBody | undefined) {
        this._additionalData = copyToSectionPostRequestBodyParameterValue?.additionalData ? copyToSectionPostRequestBodyParameterValue?.additionalData! : {};
        this._groupId = copyToSectionPostRequestBodyParameterValue?.groupId;
        this._id = copyToSectionPostRequestBodyParameterValue?.id;
        this._siteCollectionId = copyToSectionPostRequestBodyParameterValue?.siteCollectionId;
        this._siteId = copyToSectionPostRequestBodyParameterValue?.siteId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "groupId": n => { this.groupId = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "siteCollectionId": n => { this.siteCollectionId = n.getStringValue(); },
            "siteId": n => { this.siteId = n.getStringValue(); },
        };
    };
    /**
     * Gets the groupId property value. The groupId property
     * @returns a string
     */
    public get groupId() {
        return this._groupId;
    };
    /**
     * Sets the groupId property value. The groupId property
     * @param value Value to set for the groupId property.
     */
    public set groupId(value: string | undefined) {
        if(value) {
            this._groupId = value;
        }
    };
    /**
     * Gets the id property value. The id property
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        if(value) {
            this._id = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.groupId){
            writer.writeStringValue("groupId", this.groupId);
        }
        if(this.id){
            writer.writeStringValue("id", this.id);
        }
        if(this.siteCollectionId){
            writer.writeStringValue("siteCollectionId", this.siteCollectionId);
        }
        if(this.siteId){
            writer.writeStringValue("siteId", this.siteId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the siteCollectionId property value. The siteCollectionId property
     * @returns a string
     */
    public get siteCollectionId() {
        return this._siteCollectionId;
    };
    /**
     * Sets the siteCollectionId property value. The siteCollectionId property
     * @param value Value to set for the siteCollectionId property.
     */
    public set siteCollectionId(value: string | undefined) {
        if(value) {
            this._siteCollectionId = value;
        }
    };
    /**
     * Gets the siteId property value. The siteId property
     * @returns a string
     */
    public get siteId() {
        return this._siteId;
    };
    /**
     * Sets the siteId property value. The siteId property
     * @param value Value to set for the siteId property.
     */
    public set siteId(value: string | undefined) {
        if(value) {
            this._siteId = value;
        }
    };
}
