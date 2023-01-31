import {Site} from '../';
import {createSiteFromDiscriminatorValue} from '../createSiteFromDiscriminatorValue';
import {DataSource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SiteSource extends DataSource implements Parsable {
    private _site?: Site | undefined;
    /**
     * Instantiates a new SiteSource and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.security.siteSource";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "site": n => { this.site = n.getObjectValue<Site>(createSiteFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Site>("site", this.site);
    };
    /**
     * Gets the site property value. 
     * @returns a site
     */
    public get site() {
        return this._site;
    };
    /**
     * Sets the site property value. 
     * @param value Value to set for the site property.
     */
    public set site(value: Site | undefined) {
        this._site = value;
    };
}
