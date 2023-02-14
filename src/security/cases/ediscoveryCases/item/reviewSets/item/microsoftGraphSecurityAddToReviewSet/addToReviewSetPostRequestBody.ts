import {EdiscoverySearch} from '../../../../../../../models/security/';
import {AdditionalDataOptions} from '../../../../../../../models/security/additionalDataOptions';
import {createEdiscoverySearchFromDiscriminatorValue} from '../../../../../../../models/security/createEdiscoverySearchFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AddToReviewSetPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The additionalDataOptions property */
    private _additionalDataOptions?: AdditionalDataOptions | undefined;
    /** The search property */
    private _search?: EdiscoverySearch | undefined;
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
     * Gets the additionalDataOptions property value. The additionalDataOptions property
     * @returns a additionalDataOptions
     */
    public get additionalDataOptions() {
        return this._additionalDataOptions;
    };
    /**
     * Sets the additionalDataOptions property value. The additionalDataOptions property
     * @param value Value to set for the additionalDataOptions property.
     */
    public set additionalDataOptions(value: AdditionalDataOptions | undefined) {
        this._additionalDataOptions = value;
    };
    /**
     * Instantiates a new addToReviewSetPostRequestBody and sets the default values.
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
            "additionalDataOptions": n => { this.additionalDataOptions = n.getEnumValue<AdditionalDataOptions>(AdditionalDataOptions); },
            "search": n => { this.search = n.getObjectValue<EdiscoverySearch>(createEdiscoverySearchFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the search property value. The search property
     * @returns a ediscoverySearch
     */
    public get search() {
        return this._search;
    };
    /**
     * Sets the search property value. The search property
     * @param value Value to set for the search property.
     */
    public set search(value: EdiscoverySearch | undefined) {
        this._search = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<AdditionalDataOptions>("additionalDataOptions", this.additionalDataOptions);
        writer.writeObjectValue<EdiscoverySearch>("search", this.search);
        writer.writeAdditionalData(this.additionalData);
    };
}
