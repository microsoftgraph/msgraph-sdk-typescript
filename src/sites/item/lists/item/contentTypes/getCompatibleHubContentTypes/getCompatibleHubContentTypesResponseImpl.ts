import {ContentTypeImpl} from '../../../../../../models/';
import {ContentType} from '../../../../../../models/contentType';
import {createContentTypeFromDiscriminatorValue} from '../../../../../../models/createContentTypeFromDiscriminatorValue';
import {GetCompatibleHubContentTypesResponse} from './getCompatibleHubContentTypesResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getCompatibleHubContentTypes method. */
export class GetCompatibleHubContentTypesResponseImpl implements AdditionalDataHolder, GetCompatibleHubContentTypesResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: ContentType[] | undefined;
    /**
     * Instantiates a new getCompatibleHubContentTypesResponse and sets the default values.
     * @param getCompatibleHubContentTypesResponseParameterValue 
     */
    public constructor(getCompatibleHubContentTypesResponseParameterValue?: GetCompatibleHubContentTypesResponse | undefined) {
        this.additionalData = getCompatibleHubContentTypesResponseParameterValue?.additionalData ? getCompatibleHubContentTypesResponseParameterValue?.additionalData! : {}
        this.value = getCompatibleHubContentTypesResponseParameterValue?.value ;
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
        if(this.value && this.value.length != 0){        const valueArrValue: ContentTypeImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ContentTypeImpl(element));});
        writer.writeCollectionOfObjectValues<ContentTypeImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
