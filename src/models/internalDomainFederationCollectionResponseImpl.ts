import {createInternalDomainFederationFromDiscriminatorValue} from './createInternalDomainFederationFromDiscriminatorValue';
import {InternalDomainFederationImpl} from './index';
import {InternalDomainFederation} from './internalDomainFederation';
import {InternalDomainFederationCollectionResponse} from './internalDomainFederationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InternalDomainFederationCollectionResponseImpl implements AdditionalDataHolder, InternalDomainFederationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: InternalDomainFederation[] | undefined;
    /**
     * Instantiates a new InternalDomainFederationCollectionResponse and sets the default values.
     * @param internalDomainFederationCollectionResponseParameterValue 
     */
    public constructor(internalDomainFederationCollectionResponseParameterValue?: InternalDomainFederationCollectionResponse | undefined) {
        this.additionalData = internalDomainFederationCollectionResponseParameterValue?.additionalData ? internalDomainFederationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = internalDomainFederationCollectionResponseParameterValue?.nextLink ;
        this.value = internalDomainFederationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<InternalDomainFederationImpl>(createInternalDomainFederationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: InternalDomainFederationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new InternalDomainFederationImpl(element));});
        writer.writeCollectionOfObjectValues<InternalDomainFederationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
