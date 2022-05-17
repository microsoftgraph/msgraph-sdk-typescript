import {ExchangeIdFormat} from '../../../models/exchangeIdFormat';
import {TranslateExchangeIdsRequestBody} from './translateExchangeIdsRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the translateExchangeIds method. */
export class TranslateExchangeIdsRequestBodyImpl implements AdditionalDataHolder, Parsable, TranslateExchangeIdsRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The InputIds property */
    inputIds?: string[] | undefined;
    /** The SourceIdType property */
    sourceIdType?: ExchangeIdFormat | undefined;
    /** The TargetIdType property */
    targetIdType?: ExchangeIdFormat | undefined;
    /**
     * Instantiates a new translateExchangeIdsRequestBody and sets the default values.
     * @param translateExchangeIdsRequestBodyParameterValue 
     */
    public constructor(translateExchangeIdsRequestBodyParameterValue?: TranslateExchangeIdsRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = translateExchangeIdsRequestBodyParameterValue?.additionalData ? {} : translateExchangeIdsRequestBodyParameterValue?.additionalData!
        this.inputIds = translateExchangeIdsRequestBodyParameterValue?.inputIds ;
        this.sourceIdType = translateExchangeIdsRequestBodyParameterValue?.sourceIdType ;
        this.targetIdType = translateExchangeIdsRequestBodyParameterValue?.targetIdType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "inputIds": n => { this.inputIds = n.getCollectionOfPrimitiveValues<string>(); },
            "sourceIdType": n => { this.sourceIdType = n.getEnumValue<ExchangeIdFormat>(ExchangeIdFormat); },
            "targetIdType": n => { this.targetIdType = n.getEnumValue<ExchangeIdFormat>(ExchangeIdFormat); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.inputIds){
        if(this.inputIds)
        writer.writeCollectionOfPrimitiveValues<string>("inputIds", this.inputIds);
        }
        if(this.sourceIdType){
        if(this.sourceIdType)
        writer.writeEnumValue<ExchangeIdFormat>("sourceIdType", this.sourceIdType);
        }
        if(this.targetIdType){
        if(this.targetIdType)
        writer.writeEnumValue<ExchangeIdFormat>("targetIdType", this.targetIdType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
