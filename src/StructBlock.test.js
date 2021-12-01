import { StructBlockDefinition } from "wagtail/client/src/components/StreamField/blocks/StructBlock";

import $ from "wagtail/wagtail/admin/static_src/wagtailadmin/js/vendor/jquery-3.6.0.min";

window.$ = $;

describe("test", () => {
  it("should foo", () => {
    const blockDef = new StructBlockDefinition("heading_block", [], {});
    document.body.innerHTML = '<div id="placeholder"></div>';

    const boundBlock = blockDef.render(
      document.getElementById("placeholder"),
      "the-prefix",
      {
        heading_text: "Test heading text",
        size: "123",
      }
    );

    expect(boundBlock).toEqual({
      blockDef: { childBlockDefs: [], meta: {}, name: "heading_block" },
      childBlocks: {},
      type: "heading_block",
    });
  });
});
