import {AccessPackage} from './accessPackage';
import {AccessPackageCollectionResponse} from './accessPackageCollectionResponse';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {AccessPackageImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageCollectionResponseImpl implements AccessPackageCollectionResponse, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AccessPackage[] | undefined;
    /**
     * Instantiates a new AccessPackageCollectionResponse and sets the default values.
     * @param accessPackageCollectionResponseParameterValue 
     */
    public constructor(accessPackageCollectionResponseParameterValue?: AccessPackageCollectionResponse | undefined) {
        this.additionalData = accessPackageCollectionResponseParameterValue?.additionalData ? accessPackageCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = accessPackageCollectionResponseParameterValue?.nextLink ;
        this.value = accessPackageCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessPackageImpl>(createAccessPackageFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AccessPackageImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AccessPackageImpl(element));});
        writer.writeCollectionOfObjectValues<AccessPackageImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
