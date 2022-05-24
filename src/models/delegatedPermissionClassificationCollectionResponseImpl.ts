import {createDelegatedPermissionClassificationFromDiscriminatorValue} from './createDelegatedPermissionClassificationFromDiscriminatorValue';
import {DelegatedPermissionClassification} from './delegatedPermissionClassification';
import {DelegatedPermissionClassificationCollectionResponse} from './delegatedPermissionClassificationCollectionResponse';
import {DelegatedPermissionClassificationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DelegatedPermissionClassificationCollectionResponseImpl implements AdditionalDataHolder, DelegatedPermissionClassificationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DelegatedPermissionClassification[] | undefined;
    /**
     * Instantiates a new DelegatedPermissionClassificationCollectionResponse and sets the default values.
     * @param delegatedPermissionClassificationCollectionResponseParameterValue 
     */
    public constructor(delegatedPermissionClassificationCollectionResponseParameterValue?: DelegatedPermissionClassificationCollectionResponse | undefined) {
        this.additionalData = delegatedPermissionClassificationCollectionResponseParameterValue?.additionalData ? delegatedPermissionClassificationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = delegatedPermissionClassificationCollectionResponseParameterValue?.nextLink ;
        this.value = delegatedPermissionClassificationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DelegatedPermissionClassificationImpl>(createDelegatedPermissionClassificationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DelegatedPermissionClassificationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DelegatedPermissionClassificationImpl(element));});
        writer.writeCollectionOfObjectValues<DelegatedPermissionClassificationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
