import {AlterationResponse} from './alterationResponse';
import {createSearchAlterationFromDiscriminatorValue} from './createSearchAlterationFromDiscriminatorValue';
import {SearchAlterationImpl} from './index';
import {SearchAlteration} from './searchAlteration';
import {SearchAlterationType} from './searchAlterationType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlterationResponseImpl implements AdditionalDataHolder, AlterationResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Defines the original user query string. */
    public originalQueryString?: string | undefined;
    /** Defines the details of alteration information for the spelling correction. */
    public queryAlteration?: SearchAlteration | undefined;
    /** Defines the type of the spelling correction. Possible values are suggestion, modification. */
    public queryAlterationType?: SearchAlterationType | undefined;
    /**
     * Instantiates a new alterationResponse and sets the default values.
     * @param alterationResponseParameterValue 
     */
    public constructor(alterationResponseParameterValue?: AlterationResponse | undefined) {
        this.additionalData = alterationResponseParameterValue?.additionalData ? alterationResponseParameterValue?.additionalData! : {}
        this.originalQueryString = alterationResponseParameterValue?.originalQueryString ;
        this.queryAlteration = alterationResponseParameterValue?.queryAlteration ;
        this.queryAlterationType = alterationResponseParameterValue?.queryAlterationType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "originalQueryString": n => { this.originalQueryString = n.getStringValue(); },
            "queryAlteration": n => { this.queryAlteration = n.getObjectValue<SearchAlterationImpl>(createSearchAlterationFromDiscriminatorValue); },
            "queryAlterationType": n => { this.queryAlterationType = n.getEnumValue<SearchAlterationType>(SearchAlterationType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.originalQueryString){
        writer.writeStringValue("originalQueryString", this.originalQueryString);
        }
        if(this.queryAlteration){
        writer.writeObjectValue<SearchAlterationImpl>("queryAlteration", new SearchAlterationImpl(this.queryAlteration));
        }
        if(this.queryAlterationType){
        writer.writeEnumValue<SearchAlterationType>("queryAlterationType", this.queryAlterationType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
