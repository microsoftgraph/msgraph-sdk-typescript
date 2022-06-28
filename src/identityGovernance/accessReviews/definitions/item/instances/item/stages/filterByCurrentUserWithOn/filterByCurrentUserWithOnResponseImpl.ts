import {AccessReviewStageImpl} from '../../../../../../../../models/';
import {AccessReviewStage} from '../../../../../../../../models/accessReviewStage';
import {createAccessReviewStageFromDiscriminatorValue} from '../../../../../../../../models/createAccessReviewStageFromDiscriminatorValue';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the filterByCurrentUser method. */
export class FilterByCurrentUserWithOnResponseImpl implements FilterByCurrentUserWithOnResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: AccessReviewStage[] | undefined;
    /**
     * Instantiates a new filterByCurrentUserWithOnResponse and sets the default values.
     * @param filterByCurrentUserWithOnResponseParameterValue 
     */
    public constructor(filterByCurrentUserWithOnResponseParameterValue?: FilterByCurrentUserWithOnResponse | undefined) {
        this.additionalData = filterByCurrentUserWithOnResponseParameterValue?.additionalData ? filterByCurrentUserWithOnResponseParameterValue?.additionalData! : {};
        this.value = filterByCurrentUserWithOnResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessReviewStageImpl>(createAccessReviewStageFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: AccessReviewStageImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AccessReviewStageImpl(element));});
            writer.writeCollectionOfObjectValues<AccessReviewStageImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
