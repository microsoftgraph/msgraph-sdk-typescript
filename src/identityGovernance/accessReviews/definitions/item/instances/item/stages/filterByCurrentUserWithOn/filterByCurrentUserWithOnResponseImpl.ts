import {AccessReviewStageImpl} from '../../../../../../../../models/';
import {AccessReviewStage} from '../../../../../../../../models/accessReviewStage';
import {createAccessReviewStageFromDiscriminatorValue} from '../../../../../../../../models/createAccessReviewStageFromDiscriminatorValue';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the filterByCurrentUser method. */
export class FilterByCurrentUserWithOnResponseImpl implements FilterByCurrentUserWithOnResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    private _value?: AccessReviewStage[] | undefined;
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
     * Instantiates a new filterByCurrentUserWithOnResponse and sets the default values.
     * @param filterByCurrentUserWithOnResponseParameterValue 
     */
    public constructor(filterByCurrentUserWithOnResponseParameterValue?: FilterByCurrentUserWithOnResponse | undefined) {
        this._additionalData = filterByCurrentUserWithOnResponseParameterValue?.additionalData ? filterByCurrentUserWithOnResponseParameterValue?.additionalData! : {};
        this._value = filterByCurrentUserWithOnResponseParameterValue?.value;
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
        if(this.value && this.value.length != 0){        const valueArrValue: AccessReviewStageImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof AccessReviewStageImpl? element:new AccessReviewStageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewStageImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a AccessReviewStageInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: AccessReviewStage[] | undefined) {
        if(value) {
            const valueArrValue: AccessReviewStageImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof AccessReviewStageImpl? element:new AccessReviewStageImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
