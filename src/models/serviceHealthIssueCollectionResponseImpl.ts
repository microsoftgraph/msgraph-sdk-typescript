import {createServiceHealthIssueFromDiscriminatorValue} from './createServiceHealthIssueFromDiscriminatorValue';
import {ServiceHealthIssueImpl} from './index';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthIssueCollectionResponse} from './serviceHealthIssueCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServiceHealthIssueCollectionResponseImpl implements AdditionalDataHolder, Parsable, ServiceHealthIssueCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ServiceHealthIssue[] | undefined;
    /**
     * Instantiates a new ServiceHealthIssueCollectionResponse and sets the default values.
     * @param serviceHealthIssueCollectionResponseParameterValue 
     */
    public constructor(serviceHealthIssueCollectionResponseParameterValue?: ServiceHealthIssueCollectionResponse | undefined) {
        this.additionalData = serviceHealthIssueCollectionResponseParameterValue?.additionalData ? serviceHealthIssueCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = serviceHealthIssueCollectionResponseParameterValue?.nextLink ;
        this.value = serviceHealthIssueCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ServiceHealthIssueImpl>(createServiceHealthIssueFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ServiceHealthIssueImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ServiceHealthIssueImpl(element));});
        writer.writeCollectionOfObjectValues<ServiceHealthIssueImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
