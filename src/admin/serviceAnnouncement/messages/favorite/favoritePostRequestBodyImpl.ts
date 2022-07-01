import {FavoritePostRequestBody} from './favoritePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the favorite method. */
export class FavoritePostRequestBodyImpl implements FavoritePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The messageIds property */
    private _messageIds?: string[] | undefined;
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
     * Instantiates a new favoritePostRequestBody and sets the default values.
     * @param favoritePostRequestBodyParameterValue 
     */
    public constructor(favoritePostRequestBodyParameterValue?: FavoritePostRequestBody | undefined) {
        this._additionalData = favoritePostRequestBodyParameterValue?.additionalData ? favoritePostRequestBodyParameterValue?.additionalData! : {};
        this._messageIds = favoritePostRequestBodyParameterValue?.messageIds;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "messageIds": n => { this.messageIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the messageIds property value. The messageIds property
     * @returns a string
     */
    public get messageIds() {
        return this._messageIds;
    };
    /**
     * Sets the messageIds property value. The messageIds property
     * @param value Value to set for the messageIds property.
     */
    public set messageIds(value: string[] | undefined) {
        if(value) {
            this._messageIds = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.messageIds){
            writer.writeCollectionOfPrimitiveValues<string>("messageIds", this.messageIds);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
