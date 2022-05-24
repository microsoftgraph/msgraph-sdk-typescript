import {AdministrativeUnit} from './administrativeUnit';
import {AdministrativeUnitCollectionResponse} from './administrativeUnitCollectionResponse';
import {createAdministrativeUnitFromDiscriminatorValue} from './createAdministrativeUnitFromDiscriminatorValue';
import {AdministrativeUnitImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AdministrativeUnitCollectionResponseImpl implements AdditionalDataHolder, AdministrativeUnitCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AdministrativeUnit[] | undefined;
    /**
     * Instantiates a new AdministrativeUnitCollectionResponse and sets the default values.
     * @param administrativeUnitCollectionResponseParameterValue 
     */
    public constructor(administrativeUnitCollectionResponseParameterValue?: AdministrativeUnitCollectionResponse | undefined) {
        this.additionalData = administrativeUnitCollectionResponseParameterValue?.additionalData ? administrativeUnitCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = administrativeUnitCollectionResponseParameterValue?.nextLink ;
        this.value = administrativeUnitCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AdministrativeUnitImpl>(createAdministrativeUnitFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AdministrativeUnitImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AdministrativeUnitImpl(element));});
        writer.writeCollectionOfObjectValues<AdministrativeUnitImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
