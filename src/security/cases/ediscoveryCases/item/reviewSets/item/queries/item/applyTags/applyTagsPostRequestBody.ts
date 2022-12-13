import {EdiscoveryReviewTag} from '../../../../../../../../../models/security/';
import {createEdiscoveryReviewTagFromDiscriminatorValue} from '../../../../../../../../../models/security/createEdiscoveryReviewTagFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the applyTags method.
 */
export class ApplyTagsPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The tagsToAdd property */
    private _tagsToAdd?: EdiscoveryReviewTag[] | undefined;
    /** The tagsToRemove property */
    private _tagsToRemove?: EdiscoveryReviewTag[] | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new applyTagsPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "tagsToAdd": n => { this.tagsToAdd = n.getCollectionOfObjectValues<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
            "tagsToRemove": n => { this.tagsToRemove = n.getCollectionOfObjectValues<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("tagsToAdd", this.tagsToAdd);
        writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("tagsToRemove", this.tagsToRemove);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tagsToAdd property value. The tagsToAdd property
     * @returns a ediscoveryReviewTag
     */
    public get tagsToAdd() {
        return this._tagsToAdd;
    };
    /**
     * Sets the tagsToAdd property value. The tagsToAdd property
     * @param value Value to set for the tagsToAdd property.
     */
    public set tagsToAdd(value: EdiscoveryReviewTag[] | undefined) {
        this._tagsToAdd = value;
    };
    /**
     * Gets the tagsToRemove property value. The tagsToRemove property
     * @returns a ediscoveryReviewTag
     */
    public get tagsToRemove() {
        return this._tagsToRemove;
    };
    /**
     * Sets the tagsToRemove property value. The tagsToRemove property
     * @param value Value to set for the tagsToRemove property.
     */
    public set tagsToRemove(value: EdiscoveryReviewTag[] | undefined) {
        this._tagsToRemove = value;
    };
}
