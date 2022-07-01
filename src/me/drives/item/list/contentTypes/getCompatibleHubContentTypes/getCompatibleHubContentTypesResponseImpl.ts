import {ContentTypeImpl} from '../../../../../../models/';
import {ContentType} from '../../../../../../models/contentType';
import {createContentTypeFromDiscriminatorValue} from '../../../../../../models/createContentTypeFromDiscriminatorValue';
import {GetCompatibleHubContentTypesResponse} from './getCompatibleHubContentTypesResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getCompatibleHubContentTypes method. */
export class GetCompatibleHubContentTypesResponseImpl implements GetCompatibleHubContentTypesResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: ContentType[] | undefined;
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
     * Instantiates a new getCompatibleHubContentTypesResponse and sets the default values.
     * @param getCompatibleHubContentTypesResponseParameterValue 
     */
    public constructor(getCompatibleHubContentTypesResponseParameterValue?: GetCompatibleHubContentTypesResponse | undefined) {
        this._additionalData = getCompatibleHubContentTypesResponseParameterValue?.additionalData ? getCompatibleHubContentTypesResponseParameterValue?.additionalData! : {};
        this._value = getCompatibleHubContentTypesResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<ContentTypeImpl>(createContentTypeFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: ContentTypeImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof ContentTypeImpl? element:new ContentTypeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ContentTypeImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a ContentTypeInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ContentType[] | undefined) {
        if(value) {
            const valueArrValue: ContentTypeImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof ContentTypeImpl? element:new ContentTypeImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
