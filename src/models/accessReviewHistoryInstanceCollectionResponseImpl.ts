import {AccessReviewHistoryInstance} from './accessReviewHistoryInstance';
import {AccessReviewHistoryInstanceCollectionResponse} from './accessReviewHistoryInstanceCollectionResponse';
import {createAccessReviewHistoryInstanceFromDiscriminatorValue} from './createAccessReviewHistoryInstanceFromDiscriminatorValue';
import {AccessReviewHistoryInstanceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewHistoryInstanceCollectionResponseImpl implements AccessReviewHistoryInstanceCollectionResponse, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AccessReviewHistoryInstance[] | undefined;
    /**
     * Instantiates a new AccessReviewHistoryInstanceCollectionResponse and sets the default values.
     * @param accessReviewHistoryInstanceCollectionResponseParameterValue 
     */
    public constructor(accessReviewHistoryInstanceCollectionResponseParameterValue?: AccessReviewHistoryInstanceCollectionResponse | undefined) {
        this.additionalData = accessReviewHistoryInstanceCollectionResponseParameterValue?.additionalData ? accessReviewHistoryInstanceCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = accessReviewHistoryInstanceCollectionResponseParameterValue?.nextLink ;
        this.value = accessReviewHistoryInstanceCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessReviewHistoryInstanceImpl>(createAccessReviewHistoryInstanceFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AccessReviewHistoryInstanceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AccessReviewHistoryInstanceImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewHistoryInstanceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
