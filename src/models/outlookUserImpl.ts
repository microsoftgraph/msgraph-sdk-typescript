import {createOutlookCategoryFromDiscriminatorValue} from './createOutlookCategoryFromDiscriminatorValue';
import {EntityImpl, OutlookCategoryImpl} from './index';
import {OutlookCategory} from './outlookCategory';
import {OutlookUser} from './outlookUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class OutlookUserImpl extends EntityImpl implements OutlookUser, Parsable {
    /** A list of categories defined for the user. */
    public masterCategories?: OutlookCategory[] | undefined;
    /**
     * Instantiates a new outlookUser and sets the default values.
     * @param outlookUserParameterValue 
     */
    public constructor(outlookUserParameterValue?: OutlookUser | undefined) {
        super();
        this.masterCategories = outlookUserParameterValue?.masterCategories ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "masterCategories": n => { this.masterCategories = n.getCollectionOfObjectValues<OutlookCategoryImpl>(createOutlookCategoryFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.masterCategories && this.masterCategories.length != 0){        const masterCategoriesArrValue: OutlookCategoryImpl[] = []; this.masterCategories?.forEach(element => {masterCategoriesArrValue.push(new OutlookCategoryImpl(element));});
        writer.writeCollectionOfObjectValues<OutlookCategoryImpl>("masterCategories", masterCategoriesArrValue);
        }
    };
}
