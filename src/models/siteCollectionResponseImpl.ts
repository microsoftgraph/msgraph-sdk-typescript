import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {SiteImpl} from './index';
import {Site} from './site';
import {SiteCollectionResponse} from './siteCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SiteCollectionResponseImpl implements AdditionalDataHolder, Parsable, SiteCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Site[] | undefined;
    /**
     * Instantiates a new SiteCollectionResponse and sets the default values.
     * @param siteCollectionResponseParameterValue 
     */
    public constructor(siteCollectionResponseParameterValue?: SiteCollectionResponse | undefined) {
        this.additionalData = siteCollectionResponseParameterValue?.additionalData ? siteCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = siteCollectionResponseParameterValue?.nextLink ;
        this.value = siteCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SiteImpl>(createSiteFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: SiteImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SiteImpl(element));});
        writer.writeCollectionOfObjectValues<SiteImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
