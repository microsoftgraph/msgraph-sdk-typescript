import {createExternalConnectionFromDiscriminatorValue} from './createExternalConnectionFromDiscriminatorValue';
import {ExternalConnection} from './externalConnection';
import {ExternalConnectionCollectionResponse} from './externalConnectionCollectionResponse';
import {ExternalConnectionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalConnectionCollectionResponseImpl implements AdditionalDataHolder, ExternalConnectionCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ExternalConnection[] | undefined;
    /**
     * Instantiates a new ExternalConnectionCollectionResponse and sets the default values.
     * @param externalConnectionCollectionResponseParameterValue 
     */
    public constructor(externalConnectionCollectionResponseParameterValue?: ExternalConnectionCollectionResponse | undefined) {
        this.additionalData = externalConnectionCollectionResponseParameterValue?.additionalData ? externalConnectionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = externalConnectionCollectionResponseParameterValue?.nextLink ;
        this.value = externalConnectionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ExternalConnectionImpl>(createExternalConnectionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ExternalConnectionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ExternalConnectionImpl(element));});
        writer.writeCollectionOfObjectValues<ExternalConnectionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
