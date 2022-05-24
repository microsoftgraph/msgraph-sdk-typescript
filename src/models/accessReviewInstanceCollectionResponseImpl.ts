import {AccessReviewInstance} from './accessReviewInstance';
import {AccessReviewInstanceCollectionResponse} from './accessReviewInstanceCollectionResponse';
import {createAccessReviewInstanceFromDiscriminatorValue} from './createAccessReviewInstanceFromDiscriminatorValue';
import {AccessReviewInstanceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewInstanceCollectionResponseImpl implements AccessReviewInstanceCollectionResponse, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AccessReviewInstance[] | undefined;
    /**
     * Instantiates a new AccessReviewInstanceCollectionResponse and sets the default values.
     * @param accessReviewInstanceCollectionResponseParameterValue 
     */
    public constructor(accessReviewInstanceCollectionResponseParameterValue?: AccessReviewInstanceCollectionResponse | undefined) {
        this.additionalData = accessReviewInstanceCollectionResponseParameterValue?.additionalData ? accessReviewInstanceCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = accessReviewInstanceCollectionResponseParameterValue?.nextLink ;
        this.value = accessReviewInstanceCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessReviewInstanceImpl>(createAccessReviewInstanceFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: AccessReviewInstanceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AccessReviewInstanceImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewInstanceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
