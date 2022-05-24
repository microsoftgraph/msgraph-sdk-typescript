import {createScopedRoleMembershipFromDiscriminatorValue} from './createScopedRoleMembershipFromDiscriminatorValue';
import {ScopedRoleMembershipImpl} from './index';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {ScopedRoleMembershipCollectionResponse} from './scopedRoleMembershipCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScopedRoleMembershipCollectionResponseImpl implements AdditionalDataHolder, Parsable, ScopedRoleMembershipCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ScopedRoleMembership[] | undefined;
    /**
     * Instantiates a new ScopedRoleMembershipCollectionResponse and sets the default values.
     * @param scopedRoleMembershipCollectionResponseParameterValue 
     */
    public constructor(scopedRoleMembershipCollectionResponseParameterValue?: ScopedRoleMembershipCollectionResponse | undefined) {
        this.additionalData = scopedRoleMembershipCollectionResponseParameterValue?.additionalData ? scopedRoleMembershipCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = scopedRoleMembershipCollectionResponseParameterValue?.nextLink ;
        this.value = scopedRoleMembershipCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ScopedRoleMembershipImpl>(createScopedRoleMembershipFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ScopedRoleMembershipImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ScopedRoleMembershipImpl(element));});
        writer.writeCollectionOfObjectValues<ScopedRoleMembershipImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
