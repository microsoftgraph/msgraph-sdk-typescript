import {AccessReviewReviewer} from './accessReviewReviewer';
import {AccessReviewReviewerCollectionResponse} from './accessReviewReviewerCollectionResponse';
import {createAccessReviewReviewerFromDiscriminatorValue} from './createAccessReviewReviewerFromDiscriminatorValue';
import {AccessReviewReviewerImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewReviewerCollectionResponseImpl implements AccessReviewReviewerCollectionResponse, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AccessReviewReviewer[] | undefined;
    /**
     * Instantiates a new AccessReviewReviewerCollectionResponse and sets the default values.
     * @param accessReviewReviewerCollectionResponseParameterValue 
     */
    public constructor(accessReviewReviewerCollectionResponseParameterValue?: AccessReviewReviewerCollectionResponse | undefined) {
        this.additionalData = accessReviewReviewerCollectionResponseParameterValue?.additionalData ? accessReviewReviewerCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = accessReviewReviewerCollectionResponseParameterValue?.nextLink ;
        this.value = accessReviewReviewerCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessReviewReviewerImpl>(createAccessReviewReviewerFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AccessReviewReviewerImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AccessReviewReviewerImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewReviewerImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
