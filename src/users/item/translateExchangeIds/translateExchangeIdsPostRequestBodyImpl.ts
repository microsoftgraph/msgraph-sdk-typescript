import {ExchangeIdFormat} from '../../../models/exchangeIdFormat';
import {TranslateExchangeIdsPostRequestBody} from './translateExchangeIdsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the translateExchangeIds method. */
export class TranslateExchangeIdsPostRequestBodyImpl implements AdditionalDataHolder, Parsable, TranslateExchangeIdsPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The InputIds property */
    public inputIds?: string[] | undefined;
    /** The SourceIdType property */
    public sourceIdType?: ExchangeIdFormat | undefined;
    /** The TargetIdType property */
    public targetIdType?: ExchangeIdFormat | undefined;
    /**
     * Instantiates a new translateExchangeIdsPostRequestBody and sets the default values.
     * @param translateExchangeIdsPostRequestBodyParameterValue 
     */
    public constructor(translateExchangeIdsPostRequestBodyParameterValue?: TranslateExchangeIdsPostRequestBody | undefined) {
        this.additionalData = translateExchangeIdsPostRequestBodyParameterValue?.additionalData ? translateExchangeIdsPostRequestBodyParameterValue?.additionalData! : {}
        this.inputIds = translateExchangeIdsPostRequestBodyParameterValue?.inputIds ;
        this.sourceIdType = translateExchangeIdsPostRequestBodyParameterValue?.sourceIdType ;
        this.targetIdType = translateExchangeIdsPostRequestBodyParameterValue?.targetIdType ;
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
        writer.writeCollectionOfPrimitiveValues<string>("inputIds", this.inputIds);
        }
        if(this.sourceIdType){
        writer.writeEnumValue<ExchangeIdFormat>("sourceIdType", this.sourceIdType);
        }
        if(this.targetIdType){
        writer.writeEnumValue<ExchangeIdFormat>("targetIdType", this.targetIdType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
