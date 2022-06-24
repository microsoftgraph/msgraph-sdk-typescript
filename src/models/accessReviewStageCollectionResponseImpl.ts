import {AccessReviewStage} from './accessReviewStage';
import {AccessReviewStageCollectionResponse} from './accessReviewStageCollectionResponse';
import {createAccessReviewStageFromDiscriminatorValue} from './createAccessReviewStageFromDiscriminatorValue';
import {AccessReviewStageImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewStageCollectionResponseImpl implements AccessReviewStageCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AccessReviewStage[] | undefined;
    /**
     * Instantiates a new AccessReviewStageCollectionResponse and sets the default values.
     * @param accessReviewStageCollectionResponseParameterValue 
     */
    public constructor(accessReviewStageCollectionResponseParameterValue?: AccessReviewStageCollectionResponse | undefined) {
        this.additionalData = accessReviewStageCollectionResponseParameterValue?.additionalData ? accessReviewStageCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = accessReviewStageCollectionResponseParameterValue?.nextLink;
        const valueArrValue: AccessReviewStageImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof AccessReviewStageImpl? element : new AccessReviewStageImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessReviewStageImpl>(createAccessReviewStageFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AccessReviewStageImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof AccessReviewStageImpl? element : new AccessReviewStageImpl(element));});
            writer.writeCollectionOfObjectValues<AccessReviewStageImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
